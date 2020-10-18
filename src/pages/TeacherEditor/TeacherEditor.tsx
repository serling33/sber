/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { jsx } from '@emotion/core'

export default () => {
  return (
    <div className="techer__block">
      <div className="techer__block-left">
        <div className="techer__block-left-title">Шаблон учебного модуля</div>
        <div className="techer__block-left-text">
          <a href="#" style={{ backgroundImage: 'url(../images/minus.svg)' }}></a> Учебная цель
        </div>
        <div className="techer__block-left-suptext">
          <a href="#" style={{ backgroundImage: 'url(../images/minus.svg)' }}></a>Инструкция для
          учителя
        </div>
        <div className="techer__block-left-suptext">
          <a href="#" style={{ backgroundImage: 'url(../images/minus.svg)' }}></a>Возможные
          трудности
        </div>
        <div className="techer__block-left-text">
          <a href="#" style={{ backgroundImage: 'url(../images/minus.svg)' }}></a>Мотивационный блок
        </div>
        <div className="techer__block-left-suptext">
          <a href="#" style={{ backgroundImage: 'url(../images/minus.svg)' }}></a>Мотивирующее
          задание
        </div>
        <div className="techer__block-left-text">
          <a href="#" style={{ backgroundImage: 'url(../images/minus.svg)' }}></a>Система заданий
        </div>
        <div className="techer__block-left-subtext">
          <a href="#" style={{ backgroundImage: 'url(../images/plus.svg)' }}></a>Задание на уровень
          2:
        </div>
        <div className="techer__block-left-subtext" style={{ paddingLeft: '30px' }}>
          <a href="#" style={{ backgroundImage: 'url(../images/plus.svg)' }}></a>“А1”. Учебные
          задания:
        </div>
        <div className="techer__block-left-subtext" style={{ paddingLeft: '30px' }}>
          <a href="#" style={{ backgroundImage: 'url(../images/plus.svg)' }}></a>“А2”. Проверочные
          задания:
        </div>
        <div className="techer__block-left-subtext" style={{ paddingLeft: '30px' }}>
          <a href="#" style={{ backgroundImage: 'url(../images/plus.svg)' }}></a>
          <b>Добавить своё задание</b>
        </div>
        <div className="techer__block-left-subtext">Задания на уровень 3:</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="techer__block-content">
          <div className="techer__block-items">
            <div className="techer__block-items-title">Шаблон учебного модуля</div>
            <button className="techer__block-items-btn">Сохранить</button>
          </div>

          <div className="techer__block-necessaril">
            <div className="techer__block-necessaril-title">- Обязательно для заполнения</div>
            <div className="techer__block-necessaril-block">
              <div className="techer__block-necessaril-left">
                <div className="techer__block-necessaril-text">Название учебного модуля</div>
                <div className="techer__block-necessaril-text">Предмет</div>
                <div className="techer__block-necessaril-text">
                  Рекомендуемый класс(ы) и (или) уровень
                </div>
                <div className="techer__block-necessaril-text">Трудоёмкость, ч.</div>
              </div>
              <div className="techer__block-necessaril-right">
                <div>
                  <input type="text" required placeholder="Введите текст..." />
                </div>
                <div>
                  <input type="text" required placeholder="Введите текст..." />
                </div>
                <div>
                  <input type="text" required placeholder="Введите текст..." />
                </div>
                <div>
                  <input type="text" required placeholder="Введите текст..." />
                </div>
              </div>
            </div>
            <div className="techer__block-necessaril-subtitle">
              **что такое уровень (Применительно к английскому языку): <br />
              Берём за основу уровни CEFR (они же указаны в графе) <br />
              A1, A2, B1, B2, C1, C2.
            </div>
          </div>

          <div className="techer__block-target">
            <div className="techer__block-target-title">Учебная цель</div>
            <div className="techer__block-target-items">
              <div className="techer__block-target-item">
                <div className="techer__block-target-subtitle">Уровень</div>
                <div className="techer__block-target-level">4</div>
                <div className="techer__block-target-level" style={{ background: '#FFF2CC' }}>
                  3А
                </div>
                <div className="techer__block-target-level" style={{ background: '#D9EAD3' }}>
                  3Б
                </div>
                <div className="techer__block-target-level" style={{ background: '#EAD1DC' }}>
                  2А1
                </div>
              </div>
              <div className="techer__block-target-item">
                <div className="techer__block-target-subtitle">
                  Элемент цели — <br /> Учащийся сможет:
                </div>
                <div>
                  <input
                    style={{ marginTop: '20px' }}
                    type="text"
                    required
                    name="value"
                    placeholder="Введите значение..."
                  />
                </div>
                <div>
                  <input type="text" required name="value" placeholder="Введите значение..." />
                </div>
                <div>
                  <input type="text" required name="value" placeholder="Введите значение..." />
                </div>
                <div>
                  <input type="text" required name="value" placeholder="Введите значение..." />
                </div>
              </div>
              <div className="techer__block-target-item">
                <div className="techer__block-target-subtitle">
                  Пример от лица <br /> учащегося
                </div>
                <div>
                  <input
                    style={{ marginTop: '20px' }}
                    type="text"
                    required
                    name="value"
                    placeholder="Введите значение..."
                  />
                </div>
                <div>
                  <input type="text" required name="value" placeholder="Введите значение..." />
                </div>
                <div>
                  <input type="text" required name="value" placeholder="Введите значение..." />
                </div>
                <div>
                  <input type="text" required name="value" placeholder="Введите значение..." />
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button className="techer__block-target-new">Добавить ещё</button>
              <div className="techer__block-target-which">Предметные результаты (ФГОС)</div>
              <input
                className="techer__block-target-input"
                type="text"
                placeholder="Введите текст..."
              />
            </div>

            <div className="techer__block-target-title">Инструкция для учителя</div>
            <div className="techer__block-target-suptitle">
              Указана примерная типовая структура оформления. Точная таблица формируется исходя из
              планирования модуля
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src="../images/bg.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="techer__block-motivation">
          <div className="techer__block-motivation-title">Мотивационный блок</div>
          <div className="techer__block-motivation-subtitle">
            Мотивационный блок предшествует изучению модуля. Задачи блока – пробудить интерес к
            прохождению модуля, расширить кругозор ученика в различных сферах жизни. Подробнее о
            блоке можно узнать здесь.
          </div>
          <div className="techer__block-motivation-block">
            <div className="techer__block-motivation-left">
              <div className="techer__block-motivation-text">Базовая идея</div>
              <input className="techer__block-motivation-input" placeholder="Введите значение..." />
            </div>
            <div className="techer__block-motivation-left">
              <div className="techer__block-motivation-text">Проблемный вопрос</div>
              <input className="techer__block-motivation-input" placeholder="Введите значение..." />
            </div>
          </div>
          <button className="techer__block-motivation-newinput">Добавить ещё</button>

          <div className="techer__block-motivation-check">
            <div className="techer__block-motivation-task">
              <span style={{ background: '#D9EAD3' }}>Мотивирующее</span> задание
            </div>
            <div className="techer__block-motivation-task">
              <span style={{ background: '#EAD1DC' }}>Проверочное</span> задание
            </div>
            <div className="techer__block-motivation-task">
              <span style={{ background: '#C9DAF8' }}>Вариативное</span> задание
            </div>
          </div>
        </div>

        <div className="techer__block-material">
          <div className="techer__block-material-subtitle">Мотивационные материалы</div>

          <div className="techer__block-material-item">
            <div className="techer__block-material-left">
              <div className="techer__block-material-title">Видео</div>
              <div className="techer__block-material-text">
                (файл длительностью не более 5 минут, заголовок и дополнительная текстовая
                информация)
              </div>
            </div>
            <div className="techer__block-material-right">
              <input type="text" placeholder="Введите текст..." />
            </div>
          </div>

          <div className="techer__block-material-item">
            <div className="techer__block-material-left">
              <div className="techer__block-material-title">Текст</div>
              <div className="techer__block-material-text">
                (заголовок, картинка для обложки, текст (не более 100 слов)
              </div>
            </div>
            <div className="techer__block-material-right">
              <input type="text" placeholder="Введите текст..." />
            </div>
          </div>

          <div className="techer__block-material-item">
            <div className="techer__block-material-left">
              <div className="techer__block-material-title">Текст</div>
              <div className="techer__block-material-text">
                (файл длительностью не более 5 минут, заголовок и дополнительная текстовая
                информация)
              </div>
            </div>
            <div className="techer__block-material-right">
              <input type="text" placeholder="Введите текст..." />
            </div>
          </div>

          <div className="techer__block-material-item">
            <div className="techer__block-material-left">
              <div className="techer__block-material-title">
                Изображение (схемы, <br /> картинки, мемы и т. д.)
              </div>
              <div className="techer__block-material-text">(файл, заголовок, поясняющий текст)</div>
            </div>
            <div className="techer__block-material-right">
              <input type="text" placeholder="Введите текст..." />
            </div>
          </div>

          <div className="techer__block-material-item">
            <div className="techer__block-material-left">
              <div className="techer__block-material-title">Аудио</div>
              <div className="techer__block-material-text">
                (файл длительностью не более 5 минут, заголовок и дополнительная текстовая
                информация)
              </div>
            </div>
            <div className="techer__block-material-right">
              <input type="text" placeholder="Введите текст..." />
            </div>
          </div>

          <div className="techer__block-material-btn">Добавить ещё</div>
        </div>
      </div>
    </div>
  )
}
