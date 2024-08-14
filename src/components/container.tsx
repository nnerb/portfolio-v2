
interface ContainerProps {
  children: React.ReactNode
}


const Container: React.FC<ContainerProps> = ({ 
  children 
}) => {
  return (
    <div className="w-full h-full max-w-[1100px] mx-auto px-4">
      {children}
    </div>
  )
}

export default Container