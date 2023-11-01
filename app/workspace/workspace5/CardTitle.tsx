const CardTitle = () => {
  const array = {
    title: "WorkShed",
    description1: "An Simple Employee Management Card",
    description2: "Something in the way",
    description3: "Nothing in the way"
  }
  return (
    <>
      <div className="bg-red-500 text-white h-32">
        <div className="flex items-center justify-center h-full">
          <div className="relative">
            <div className="animate-description-1 absolute text-black">
              {array.title}
            </div>
            <div className="animate-description-2 absolute text-black">
              {array.description1}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default CardTitle

