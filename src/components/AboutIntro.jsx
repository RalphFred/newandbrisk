import img from '../assets/img.jpg'

export default function AboutIntro() {
  return (
    <div>
      <div>
        <h1>About Us</h1>
        <p>
          Welcome to New and Brisk Culinary, where tradition meets innovation.
          Our mission is to inspire a love for culinary arts through an
          unforgettable experience led by experienced chefs. Join us on a
          flavorful journey where passion and precision converge.
        </p>
        <button>Read More</button>
      </div>
      <div>
        <img src={img} alt="image"/>
      </div>
    </div>
  );
}
