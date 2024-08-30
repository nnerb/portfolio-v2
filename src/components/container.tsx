
interface ContainerProps {
  children: React.ReactNode
}


const Container: React.FC<ContainerProps> = ({ 
  children 
}) => {
  return (
    <div className="relative">
      {children}
    </div>
  )
}

export default Container