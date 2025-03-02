export const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    }
  }
}

export const first_item = {
 hidden: {
  opacity: 0,
  x: -100,
 },
 show: {
  opacity: 1,
  x: 0,
  transition:{
    type:"spring",
    duration: 2
  }
 }
}
export const second_item = {
hidden: {
 opacity: 0,
 x: 100,
},
show: {
 opacity: 1,
 x: 0,
 transition:{
   type:"spring",
   duration: 2
 }
}
}