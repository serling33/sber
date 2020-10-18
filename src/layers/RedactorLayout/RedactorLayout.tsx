/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { jsx } from '@emotion/core'
import { FC, ReactNode } from 'react'
import { MainMenu } from '../DefaultLayout/MainMenu'

type Props = {
  children: ReactNode
}

export const RedactorLayout: FC<Props> = ({ children }) => {
  return (
    <div className="techer">
      <div className="container-fuild">
        <MainMenu />
        {children}
        <div className="techer__block-right-chat">
          <div className="techer__block-right-exit">
            <img src="../images/close.svg" alt="" />
          </div>
          <div className="techer__block-right-top">
            <img src="../images/ava.svg" alt="" />
            <div className="techer__block-right-text">Имя пользователя</div>
          </div>
          <div className="techer__block-right-content"></div>
          <div className="techer__block-right-bottom">
            <div className="techer__block-input">
              <a href="#"></a>
              <button></button>
              <input type="text" placeholder="Введите сообщение..." required />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
