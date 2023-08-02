import {renderHook, act} from '@testing-library/react-hooks';
import useSheepJump from './Sheep.hook';

// Mock NodeJS.Timeout
jest.useFakeTimers();

describe('useSheepJump', () => {
  test('should increment sheepCounter after an interval', () => {
    const {result} = renderHook(() => useSheepJump());

    expect(result.current.sheepCounter).toBe(0);

    act(() => {
      jest.advanceTimersByTime(2290); // Advance 2290ms to trigger the setInterval
    });

    expect(result.current.sheepCounter).toBe(1);

    act(() => {
      jest.advanceTimersByTime(2290 * 3); // Advance 3 intervals (2290ms * 3)
    });

    expect(result.current.sheepCounter).toBe(4);
  });

  test('should set displayRandomSheep to true when sheepCounter is a multiple of 10', () => {
    const {result} = renderHook(() => useSheepJump());

    expect(result.current.displayRandomSheep).toBe(false);

    act(() => {
      jest.advanceTimersByTime(2290 * 10); // Advance 10 intervals (sheepCounter becomes 10)
    });

    expect(result.current.displayRandomSheep).toBe(true);

    act(() => {
      jest.advanceTimersByTime(3000); // Advance 3000ms to hide the random sheep
    });

    expect(result.current.displayRandomSheep).toBe(false);
  });

  test('should toggle displaySleepButton and reset sheepCounter when handleImageClick is called', () => {
    const {result} = renderHook(() => useSheepJump());

    expect(result.current.displaySleepButton).toBe(false);

    act(() => {
      result.current.handleImageClick();
    });

    expect(result.current.displaySleepButton).toBe(true);
    expect(result.current.sheepCounter).toBe(0);

    act(() => {
      result.current.handleImageClick();
    });

    expect(result.current.displaySleepButton).toBe(false);
  });

  test('should toggle gotoSleep and clearInterval when handleSleepButtonClick is called', () => {
    const {result} = renderHook(() => useSheepJump());

    expect(result.current.gotoSleep).toBe(false);

    // Spy on clearInterval
    const clearIntervalSpy = jest.spyOn(global, 'clearInterval');

    act(() => {
      result.current.handleSleepButtonClick();
    });

    expect(result.current.gotoSleep).toBe(true);
    expect(clearIntervalSpy).toHaveBeenCalled();

    act(() => {
      result.current.handleSleepButtonClick();
    });

    expect(result.current.gotoSleep).toBe(false);
    expect(clearIntervalSpy).toHaveBeenCalled();
  });
});
