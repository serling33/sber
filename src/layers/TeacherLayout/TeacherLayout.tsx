/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { jsx } from '@emotion/core'
import { FC, ReactNode } from 'react'
import { MainMenu } from '../DefaultLayout/MainMenu'

type Props = {
  children: ReactNode
}

export const TeacherLayout: FC<Props> = ({ children }) => {
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

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            position: 'fixed',
            right: '0px',
            top: '0px',
          }}
        >
          <div className="techer__block-right-updates">
            <div className="techer__block-right-close">
              <img src="../images/close.svg" alt="" />
            </div>
            <div className="techer__block-right-top">
              <div className="techer__block-right-text" style={{ margin: '0 auto' }}>
                Изменения по модулю “Математика”
              </div>
            </div>
            <div className="techer__block-right-content"></div>
          </div>

          <div className="techer__block-right">
            <div className="techer__block-right-fixed">
              <div className="techer__block-right-icon">
                <div className="purpl updateBtn">
                  <img src="../images/time.svg" alt="" />
                </div>
                <br />
                <div className="purpl chatBtn">
                  <img src="../images/chat.svg" alt="" />
                </div>
              </div>
              <div className="techer__block-right-block">
                <div className="techer__block-right-title">БЛОКИ</div>
                <div className="techer__block-right-item">
                  <div className="techer__block-right-subtitle">ТЕКСТ</div>
                  <div className="techer__block-right-text">Описание блока с контентом</div>
                </div>
                <div className="techer__block-right-item">
                  <div className="techer__block-right-subtitle">Изображение</div>
                  <div className="techer__block-right-text">Описание блока с контентом</div>
                </div>
                <div className="techer__block-right-item">
                  <div className="techer__block-right-subtitle">Видео</div>
                  <div className="techer__block-right-text">Описание блока с контентом</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
