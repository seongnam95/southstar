import { useCallback, useMemo, useState } from 'react';

interface SliderOptions {
  /** 슬라이드 이동 거리 `default: '100%'` */
  offset?: string | number;
  /** 슬라이드 이동 방향 `default: 'vertical'` */
  slideDirection?: 'vertical' | 'horizontal';
  /** 전체 슬라이드 개수 `default: 0` */
  totalCount?: number;
  /** 슬라이드 활성화 여부 `default: true` */
  enabled?: boolean;
  /** 터치 이벤트 임계치 `default: 50` */
  touchThreshold?: number;
  /** 마우스 휠 이벤트 임계치 `default: 20` */
  wheelThreshold?: number;
}

export const useSlider = <T extends HTMLElement>({
  offset = '100%',
  slideDirection = 'vertical',
  totalCount = 0,
  enabled = true,
  touchThreshold = 50,
  wheelThreshold = 20,
}: SliderOptions = {}) => {
  const [[currentIndex, direction], setSlide] = useState([0, 0]);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  /** 슬라이드 애니메이션 */
  const variants = useMemo(() => {
    const isVertical = slideDirection === 'vertical';
    const axis = isVertical ? 'y' : 'x';

    return {
      enter: (dir: number) => ({
        [axis]: dir > 0 ? offset : `-${offset}`,
        opacity: 0,
      }),
      center: {
        [axis]: 0,
        opacity: 1,
        zIndex: 1,
      },
      exit: (dir: number) => ({
        [axis]: dir < 0 ? offset : `-${offset}`,
        opacity: 0,
        zIndex: 0,
      }),
    };
  }, [slideDirection, offset]);

  /** 슬라이드 이동 (index=이동할 슬라이드 인덱스) */
  const moveTo = useCallback(
    (index: number) => {
      setSlide([index, index - currentIndex]);
    },
    [currentIndex]
  );

  /** 다음 슬라이드 이동 */
  const next = useCallback(() => {
    setSlide([currentIndex + 1, 1]);
  }, [currentIndex]);

  /** 이전 슬라이드 이동 */
  const prev = useCallback(() => {
    setSlide([currentIndex - 1, -1]);
  }, [currentIndex]);

  /** 슬라이드 이동 (1=다음, -1=이전) */
  const moveSlide = useCallback(
    (newDirection: number) => {
      setSlide([currentIndex + newDirection, newDirection]);
    },
    [currentIndex]
  );

  /** 슬라이드 이동 방향 결정 함수 */
  const determineSlideDirection = useCallback(
    (delta: number) => {
      if (!enabled) return;

      const isForward = delta > 0;

      const hasNext = currentIndex < totalCount;
      const hasPrev = currentIndex > 0;

      if ((isForward && hasNext) || (!isForward && hasPrev)) {
        moveSlide(isForward ? 1 : -1);
      }
    },
    [currentIndex, enabled, totalCount, moveSlide]
  );

  /** 마우스 휠 이벤트 */
  const onWheel = useCallback(
    (event: React.WheelEvent<T>) => {
      if (Math.abs(event.deltaY) < wheelThreshold) return;
      determineSlideDirection(event.deltaY);
    },
    [determineSlideDirection, wheelThreshold]
  );

  /** 모바일 터치 시작 이벤트 */
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  }, []);

  /** 모바일 터치 이동 이벤트 */
  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStart) return;

      const touchEnd = e.touches[0].clientY;
      const diff = touchStart - touchEnd;

      if (Math.abs(diff) < touchThreshold) return;

      determineSlideDirection(diff);
      setTouchStart(null);
    },
    [touchStart, determineSlideDirection]
  );

  /** 슬라이드 이벤트 핸들러 */
  const handlers = { onWheel, onTouchStart, onTouchMove };

  return {
    /** 슬라이드 애니메이션 */
    variants,
    /** 현재 슬라이드 인덱스 */
    currentIndex,
    /** 슬라이드 이동 방향 */
    direction,
    /** 슬라이드 이벤트 핸들러 */
    handlers,
    /** 슬라이드 이동 (1=다음, -1=이전) */
    moveSlide,
    /** 슬라이드 이동 (index=이동할 슬라이드 인덱스) */
    moveTo,
    /** 다음 슬라이드 이동 */
    next,
    /** 이전 슬라이드 이동 */
    prev,
  };
};
