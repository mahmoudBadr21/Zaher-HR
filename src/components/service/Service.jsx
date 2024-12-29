import './service.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dataServices } from '../../../public/data'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";


const Service = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    const item = dataServices.find((item) => item.id === parseInt(id))
    window.scrollTo(0, 0)
    if (item) {
      setItem(item)
    }
  }, [id])

  return (
    <div className='service container'>
      {
        item ? (
          <div className='serviceContent'>
            <h2 className='mainTitle'>{item.title}</h2>

            <p className='minDesc'>{item.minDesc}</p>

            <div className="image">
              <img src={item.image} alt="" />
            </div>

            {item.come&&
              <h1 className="come">{item.come}</h1>
            }

            {item.desc &&
            <Accordion
              className="accordion"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
            <div className="serviceAccrdion">
              {
                item.desc.map((val, index) => {
                  return (
                    <AccordionItem
                      className="accordionItem"
                      key={index}
                      uuid={index}
                    >
                      <AccordionItemHeading>
                        <AccordionItemButton className="accordionButton flexCenterSpace">
                          <span className='servTitle'>{val.servTitle}</span>
                          <span className='icon'><i className="fas fa-angle-down"></i></span>
                        </AccordionItemButton>
                      </AccordionItemHeading>


                      <AccordionItemPanel>
                        <p className="servDecs">
                          <p className="servDecsText">{val.text}</p>

                          {val.piontTitle &&
                            <p className="servDecsPoints">
                              <p className="pointsTitle">{val.piontTitle}</p>
                              <p>
                                {String(val.pointContent)
                                  .split(".")
                                  .map((val, index) => {
                                    if (val != "undefined") {
                                      return <li key={index}>{val}.</li>
                                    }
                                  })}
                              </p>
                            </p>
                          }

                          {val.piontTitle2 &&
                            <p className="servDecsPoints">
                              <p className="pointsTitle">{val.piontTitle2}</p>
                              <p>
                                {String(val.pointContent2)
                                  .split(".")
                                  .map((val, index) => {
                                    if (val != "undefined") {
                                      return <li key={index}>{val}.</li>
                                    }
                                  })}
                              </p>
                            </p>
                          }
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  );
                })
              }
            </div>
            </Accordion>
            }
          </div>
        )
        :(null)
      }
    </div>
  )
}

export default Service