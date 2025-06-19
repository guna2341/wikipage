import { BigArrow } from "@/assets"
import { Accordion, AccordionItem } from "@heroui/accordion"



export const AccordianComponent = ({
    id,
    title,
    content,
    className,
    classNames
}) => {
  return (
      <Accordion className={`w-full ${className}`}
      >
              <AccordionItem 
              key={id} 
              title={title}
              indicator={<BigArrow/>}
              classNames={{...classNames}}
              >
                  {content}
              </AccordionItem>
      </Accordion>
  )
}

