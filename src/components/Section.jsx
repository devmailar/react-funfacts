import data from "./data";

function Section() {
  return (
    <div className="section">
      <ol>
        <li>
          {data.name} was first released in {data.created}
        </li>
        <li>
          {data.name} was originally created by {data.creator}
        </li>
        <li>
          {data.name} has well over {data.stars} on GitHub
        </li>
        <li>
          {data.name} is maintained by {data.maintained}
        </li>
        <li>
          {data.name} powers thousands of {data.powers}, including mobile apps
        </li>
      </ol>
    </div>
  );
}

export default Section;