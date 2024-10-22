import data from "../public/donation.json";

function HomePage() {
  const a = data.donations;
  return <div>{a}</div>;
}

export default HomePage;
