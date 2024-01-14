const services = [
  {
    name: 'Professional Home Course',
    description: "Elevate your home cooking with our Professional Home Course, where you'll master essential culinary skills and techniques to create gourmet meals in your kitchen.",
    duration: '15 weeks',
    price: '450,000',
  },
  {
    name: 'Food Entusiast Course',
    description: "Dive into the world of flavors with our Food Enthusiast Course, designed for those passionate about food. Explore diverse culinary techniques and ignite your culinary creativity.",
    duration: '6 weeks',
    price: '120,000',
  },
  {
    name: 'Nigerian Cuisine Course',
    description: "Immerse yourself in the rich tapestry of Nigerian flavors. Our course celebrates the diversity of Nigerian cuisine, teaching traditional techniques and modern interpretations.",
    duration: '6 weeks',
    price: '250,000',
  },
  {
    name: 'Continental Cuisines Course',
    description: "Explore global flavors in our Continental Cuisines Course. Master the art of crafting authentic dishes from around the world, refining your skills and bringing diverse international tastes to your table",
    duration: '8 weeks',
    price: '400,000',
  },
  {
    name: 'Nigerian Pastry and Cakes Course',
    description: "Sweeten your skills with our Nigerian Pastry and Cakes Course. Delve into the art of creating delightful pastries and cakes, blending local flavors with global pastry techniques.",
    price: '250,000',
    duration: '6 weeks',
  },
  {
    name: 'International Pastry and Desserts Course',
    description: "Indulge in the art of exquisite pastries and desserts from around the world. Our International Pastry and Desserts Course will refine your skills in creating sweet masterpieces.",
    price: '350,000',
    duration: '8 weeks',
  },
  {
    name: 'Healthy Menu Class',
    description: "Discover the art of crafting nutritious and delicious meals with our Healthy Menu Class. Learn innovative techniques to create meals that nourish the body and delight the palate.",
    price: '250,000',
    duration: '4 weeks',
  },
  {
    name: 'Special Needs Class',
    description: "Tailored for inclusivity, our Special Needs Class focuses on adapting culinary techniques to accommodate diverse dietary requirements, fostering an environment of culinary excellence",
    price: '250,000',
    duration: '4 weeks',
  },
  {
    name: 'Apprenticeship Course',
    description: "Elevate your culinary career with hands-on experience in our Apprenticeship Course. Work alongside seasoned chefs, gaining practical skills and insights to excel in the culinary industry.",
    price: '250,000',
    duration: '6 weeks',
  },
  {
    name: 'Kiddies Cake Club',
    description: "Ignite a love for baking in young hearts with our Kiddies Cake Club. A delightful, hands-on experience where children learn the basics of baking and decorating sweet treats.",
    price: '10,000',
    duration: 'Paid Monthly',
  },
  {
    name: 'Summer Cooking Course',
    description: "Make your summer sizzle with our Summer Cooking Course. From refreshing salads to barbecue delights, explore seasonal flavors and techniques for memorable summer culinary creations.",
    price: '40,000',
    duration: '3 weeks',
  },
]

const testimonials = [
  {
    name: 'Arome Jesse',
    testimonial: 'New and Brisk Culinary exceeded my expectations! The passionate instructors and hands-on approach made every class a joy. I not only mastered essential culinary skills but discovered my unique style. Grateful for an unforgettable culinary journey',
  },
  {
    name: 'Olurin Daniel',
    testimonial: 'Choosing New and Brisk Culinary was the best decision for my culinary career. The experienced faculty provided invaluable insights, and the state-of-the-art facilities allowed me to experiment and perfect my craft. Truly a transformative experience!',
  },
  {
    name: 'Freda Frederick',
    testimonial: 'As an international student, New and Brisk Culinary welcomed me with open arms. The diverse and collaborative environment allowed me to learn not only from seasoned chefs but also from my peers. A truly enriching experience!',
  },
  {
    name: 'Musa Kingsley',
    testimonial: "New and Brisk Culinary not only equipped me with the essential skills for the culinary world but also instilled a deep appreciation for creativity. The school's commitment to excellence set the foundation for my successful career. Forever grateful!",
  },
  {
    name: 'Zuzu Evlyn',
    testimonial: "I enrolled in the Baking and Pastry program, and it was a delight from start to finish. The instructors were not only knowledgeable but also passionate about their craft. The hands-on experience prepared me for a fulfilling career in the pastry world.",
  },
  {
    name: 'Omovbude Deborah',
    testimonial: "I enrolled in the Baking and Pastry program, and it was a delight from start to finish. The instructors were not only knowledgeable but also passionate about their craft. The hands-on experience prepared me for a fulfilling career in the pastry world.",
  },
  {
    name: 'Damola Joshua',
    testimonial: "New and Brisk Culinary gave me the confidence to turn my culinary dreams into reality. The entrepreneurial focus of the programs, combined with mentorship from industry professionals, empowered me to start my own culinary venture.",
  },
]

const images = [
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img1.jpg?alt=media&token=6dc15c5d-9822-444a-a228-24b29234bf21',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img10.jpg?alt=media&token=55e6229f-f39d-49c2-a866-44ef294fa3cf',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img11.jpg?alt=media&token=7ab3bc6f-390a-4992-b307-93c18d769fc5',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img19.jpg?alt=media&token=ca3d4915-cca4-4f4c-a5f3-b98f8b7120fd',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img18.jpg?alt=media&token=aee178ca-5ac7-474c-8e35-f1f60d49371f',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img17.jpg?alt=media&token=bb8f7f2d-76dd-4435-9160-ed8bf80b4d8e',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img16.jpg?alt=media&token=e575d661-8602-41a5-870e-85499c70d128',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img15.jpg?alt=media&token=3f3d6bb2-5fc1-4d52-a27e-5a9ca5e5066e',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img14.jpg?alt=media&token=9c6a36bf-8953-4afb-aa78-d903de76a5e8',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img13.jpg?alt=media&token=d7c6f76a-f763-4e21-9ecb-84f1c8e954d2',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img12.jpg?alt=media&token=86108875-d7a0-4a6f-9f5c-7bea86801faf',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img20.jpg?alt=media&token=81aab7d6-088e-4a16-a361-88e3f764fbb2',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img2.jpg?alt=media&token=e7e70e55-5c02-46e9-8418-e544d124782e',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img3.jpg?alt=media&token=e6b8f87f-af55-4e6e-bf01-913d1ae4c55e',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img29.jpg?alt=media&token=d991cbfa-f34f-4bbb-9fbd-31afa715d9bc',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img28.jpg?alt=media&token=7a1667f6-1763-4814-85e1-33ec6bb5fb53',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img27.jpg?alt=media&token=375ac0fa-9fc4-4f6a-8329-9281f54d4c0d',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img26.jpg?alt=media&token=debd71b5-558a-4238-8908-b37131f52998',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img25.jpg?alt=media&token=86aaea7b-06f1-4b42-904f-5a4055c66dfd',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img24.jpg?alt=media&token=f32ef2c8-6921-4ff6-bcfb-4e1e68416cb8',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img23.jpg?alt=media&token=de6a8409-f98d-411e-9f41-86762a1bd0d9',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img22.jpg?alt=media&token=282937b7-210e-4d3e-9774-ee8e5569ebba',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img21.jpg?alt=media&token=88a65928-dfac-40d9-b9c2-52236f7a0e91',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img9.jpg?alt=media&token=f72368c8-dcfc-4a87-a28e-b02fa5dfafea',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img8.jpg?alt=media&token=e0df0be8-e0bd-46b7-9516-b512673e9feb',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img7.jpg?alt=media&token=5942c569-554f-45ca-bdb3-91847573498a',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img6.jpg?alt=media&token=31f190ba-fb47-4393-be67-7188835e1087',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img5.jpg?alt=media&token=3940c68e-d04b-4dce-a347-dd2e617e5f44',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img4.jpg?alt=media&token=bb18741f-6b3c-4cd3-a7d9-0b11950677eb',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/neandbrisk.appspot.com/o/img30.jpg?alt=media&token=228afeee-3c03-4b36-9c04-e6515f4bc698',
  },
]

export {services, testimonials, images}