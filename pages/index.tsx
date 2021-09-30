import { Button, buttonVariants } from '@components/button'
import { container, flex } from '@components/layout'

export default function App() {
  return (
    <main className="App">
      <div className={container()}>
        <h1>Button</h1>

        {Object.keys(buttonVariants).map(
          (variant: keyof typeof buttonVariants) => {
            return (
              <div className={flex()} key={variant}>
                <div
                  className={flex({
                    gap: '6',
                    css: {
                      flexDirection: 'column',
                      p: '$6',
                    },
                  })}
                >
                  <div className={flex({ gap: '6' })}>
                    <Button variant={variant}>Button</Button>
                    <Button variant={variant} size="2">
                      Button
                    </Button>
                    <Button variant={variant} size="3">
                      Button
                    </Button>
                  </div>
                  <div className={flex({ gap: '6', css: { mt: '$6' } })}>
                    <Button variant={variant} disabled>
                      Button
                    </Button>
                    <Button variant={variant} disabled size="2">
                      Button
                    </Button>
                    <Button variant={variant} disabled size="3">
                      Button
                    </Button>
                  </div>
                </div>
                <div
                  className={flex({
                    gap: '6',
                    css: {
                      flexDirection: 'column',
                      p: '$6',
                      backgroundColor: 'black',
                    },
                  })}
                >
                  <div className={flex({ gap: '6' })}>
                    <Button inverted variant={variant}>
                      Button
                    </Button>
                    <Button inverted variant={variant} size="2">
                      Button
                    </Button>
                    <Button inverted variant={variant} size="3">
                      Button
                    </Button>
                  </div>
                  <div className={flex({ gap: '6', css: { mt: '$6' } })}>
                    <Button inverted variant={variant} disabled>
                      Button
                    </Button>
                    <Button inverted variant={variant} disabled size="2">
                      Button
                    </Button>
                    <Button inverted variant={variant} disabled size="3">
                      Button
                    </Button>
                  </div>
                </div>
              </div>
            )
          }
        )}
      </div>
    </main>
  )
}
