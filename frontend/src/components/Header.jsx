import './Header.css'
import { Text } from "@nextui-org/react"

function Header() {

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const dayName = days[today.getDay()];

  return (
    <div className="Header">
      <Text h2 css={{
          textGradient: "45deg, $red600 20%, $pink600 100%",
          }}
        weight="bold" >{new Date().toLocaleDateString("en-GB")} {dayName}</Text>
      <Text h2 css={{
          textGradient: "45deg, $red600 20%, $pink600 100%",
          }}
        weight="bold" >Current Weather</Text>
    </div>
  )

}

export default Header