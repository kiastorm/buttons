import React from 'react'
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react'
import { RunOptions } from 'axe-core'
import { toHaveNoViolations, axe } from 'jest-axe'

export * from '@testing-library/react'

expect.extend(toHaveNoViolations)

type UI = Parameters<typeof rtlRender>[0]

function ChildrenPassthrough({ children }: { children: React.ReactElement }) {
  return children
}

export interface TestOptions extends Omit<RenderOptions, 'wrapper'> {
  wrapper?: typeof ChildrenPassthrough
}

type TestA11YOptions = RenderOptions & { axeOptions?: RunOptions }

export const render = (
  ui: UI,
  { wrapper: Wrapper = ChildrenPassthrough, ...options }: TestOptions = {}
): RenderResult => rtlRender(<Wrapper>{ui}</Wrapper>, options)

export const testA11y = async (
  ui: UI | Element,
  { axeOptions, ...options }: TestA11YOptions = {}
) => {
  const container = React.isValidElement(ui)
    ? rtlRender(ui, options).container
    : ui

  const results = await axe(container, axeOptions)

  expect(results).toHaveNoViolations()
}
