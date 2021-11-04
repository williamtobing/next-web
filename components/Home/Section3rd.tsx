const Section3rd = () => {
  return (
    <section className="h-screen bg-gray-800">
      <div className="flex">
        <div className="w-1/2">
          <img
            src="https://res.cloudinary.com/dox0nkwax/image/upload/v1635603717/logo/WILLIAM_002_tiacec.gif"
            alt="logo gif"
            className="h-screen w-full object-cover"
          />
        </div>
        <div className="w-1/2">
          <div className="bg-gray-500 w-full h-screen">
            <div className="flex flex-col justify-center h-full d-text mx-12">
              <h1 className="text-4xl italic font-bold mb-4">William Suarez</h1>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                distinctio esse consequuntur corporis fugit laudantium aliquam
                vel, illum obcaecati saepe voluptate molestiae molestias modi
                laborum maiores sequi amet ea quod!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3rd;
