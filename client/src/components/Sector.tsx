import "../styles/Sector.css";

interface SectorProp {
  sector: string;
}

const Sector = (props: SectorProp) => {
  return (
    <>
      <section className="sector">
        <h1 className="sector-heading">{props.sector}</h1>
        <hr />
      </section>
      <br />
    </>
  );
};

export default Sector;
