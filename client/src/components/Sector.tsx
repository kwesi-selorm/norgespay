import "../styles/Sector.css";

interface SectorProp {
  sector: string;
}

const Sector = (props: SectorProp) => {
  return (
    <>
      <summary className="sector-heading">
        <h1 style={{ fontSize: "1.2rem", margin: 0 }}>{props.sector}</h1>
      </summary>
      <hr />
      <br />
    </>
  );
};

export default Sector;
