import { sum } from 'src/utils/init/sum'
import { addDiv } from 'src/utils/init/dom'
import { render, screen } from '@testing-library/react'
import SignUp from 'src/pages/signup'
describe('初始化测试', () => {
  it('支持 TypeScript', () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
  })
  it('测试是否支持浏览器环境', () => {
    addDiv()
    expect(document.body.querySelectorAll('div')).toHaveLength(1)
  })
  it('测试是否支持 tlr 功能', () => {
    render(<SignUp />)
    expect(screen.getByText('SignUp')).toBeInTheDocument()
  })
})
