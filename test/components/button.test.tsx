import { Button } from '@components/button'
import { render, testA11y, screen } from '../test-utils'

it('passes a11y test', async () => {
  await testA11y(<Button>test</Button>)
})

test('has correct aria attributes', () => {
  const { rerender } = render(<Button>Hello</Button>)

  // button has role="button"
  let button = screen.getByRole('button')

  // disabled sets disabled
  expect(button).not.toHaveAttribute('aria-disabled')
  rerender(<Button disabled>Hello</Button>)
  button = screen.getByRole('button')
  expect(button).toHaveAttribute('disabled', '')
})

test('has correct type attribute', () => {
  const { getByTestId, rerender } = render(
    <Button data-testid="btn" type="submit">
      Email
    </Button>
  )

  expect(getByTestId('btn')).toHaveAttribute('type', 'submit')

  rerender(
    <Button data-testid="btn" type="button">
      Email
    </Button>
  )
  expect(getByTestId('btn')).toHaveAttribute('type', 'button')
})
