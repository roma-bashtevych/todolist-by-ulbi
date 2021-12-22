import './Modal.css'

export const Modal = ({children, visible, setVisible}) => {

    let rootClasses = 'modal';
    if(visible){
       rootClasses += ' active'
    }
    return (
        <div className={rootClasses} onClick={() => setVisible(false)}>
          <div className={'modal__content'} onClick={(e) => e.stopPropagation()}>
              {children}
          </div>
        </div>
    )
}
