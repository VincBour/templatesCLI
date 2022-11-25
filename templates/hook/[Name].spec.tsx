import { renderHook } from '@testing-library/react-hooks';
import { [Name] } from './[Name]';

describe('[Name]', () => {
    it('should return 2', () => {
        const { result } = renderHook(() => [Name]());
        const value = result.current();
        expect(value).toEqual(2);
    });
});