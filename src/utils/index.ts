type DebouncedFunction<T extends unknown[]> = ((..._args: T) => void) & {
  cancel: () => void;
};

export const debounce = <T extends unknown[]>(
  func: (..._args: T) => void,
  delayInMilliseconds: number = 500,
): DebouncedFunction<T> => {
  let timerId: ReturnType<typeof setTimeout> | null = null;

  const debouncedFunction = function (...args: T) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => func(...args), delayInMilliseconds);
  };

  debouncedFunction.cancel = function () {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
  };

  return debouncedFunction;
};
