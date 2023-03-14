
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'

import App from './App';

test('Renders main page correctly', async () => {
    render(<App />);
    const buttonCount = await screen.findByRole('button');
    const codeIsBiggerThan0 = await screen.queryByText(/Count is bigger than 0/);

    expect(buttonCount.innerHTML).toBe('count is 0');
    expect(codeIsBiggerThan0).not.toBeInTheDocument();

    await user.click(buttonCount);
    await user.click(buttonCount);

    expect(buttonCount.innerHTML).toBe('count is 2');
    expect(await screen.queryByText(/Count is bigger than 0/)).toBeInTheDocument();
});