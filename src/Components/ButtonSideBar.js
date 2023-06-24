import './ButtonSideBar.css'

export default function ButtonSideBar({img , text , fontSize}) {
  return (
    <button style={{"fontSize" : `${fontSize}px`}}>
        {img}<span>{text}</span>
    </button> 
  )
}
