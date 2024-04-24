import React, {useState} from 'react';
import Gallery from './Gallery';
 
export default function Portfolio() {
  const [items, setItems] = useState(Gallery);
  const [active, setActive] = useState(false);
  const filterItem = (categItem) => {
    const updateItems = Gallery.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActive(true);
  };

  return (
    <div  className="mt-5" id='portfolio'>
     <br />
    <br />
    <br />
    <br />
    <div className="section1 text-center">
        <h1>Portfolio</h1>
        <h2></h2>
        <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit</p>
    </div>
    
    <div className="container">
        <ul className="nav nav-pills justify-content-center">
        <li className="nav-item mx-2">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => setItems(Gallery)}
            >
              All
            </a>
          </li>
          <li className="nav-item mx-2">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("APP")}
            >
             APP
            </a>
          </li>
          <li className="nav-item mx-2">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("Card")}
            >
          Card
            </a>
          </li>
          <li className="nav-item mx-2">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("Web")}
            >
              Web
            </a>
          </li>
         
         
        </ul>
      </div>

      <div className="container-fluid mt-4">
        <div className="row">
          {items.map((elem) => {
            const { id, name, image, description } = elem;

            return (
              <div className="col-sm-4  p-4 " id={id}>
                <div className="card mb-3">
                  <div className="row no-gutters">
                    <div className="">
                      <img className="img-fluid" src={image} alt={name} />
                    
                    <div className="col-md-7 text-center">
                      <div className="card-body">
                        <h5 className="card-title mb-0 ">{name}</h5>
                        <p className="card-text">{description}</p>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
 
    </div>
  )
}
