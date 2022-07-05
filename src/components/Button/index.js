import './styles.css'

function Button(props) {

	function meuEvento() {
		props.action()
	}

  const setClass = () => {
    const { type } = props

    if(type === 'rounded') {
      return 'btn_round'
    }

    if(type === 'hollow') {
      return 'btn_hollow'
    }

    if(type === 'create') {
      return 'btn_create'
    }

    if(type === 'edit') {
      return 'btn_edit'
    }

    if(type === 'remove') {
      return 'btn_remove'
    }
    
    if(type === 'done') {
      return 'btn_done'
    }

    return 'btn_default'
    
  }
	return (

			<button
      className={setClass()}
      onClick={meuEvento}
      disabled={props?.disabled || false}
      >
      {props.label}
      </button>
	)
}
export default Button
