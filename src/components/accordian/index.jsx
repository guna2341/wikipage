import { Accordion, AccordionItem } from "@heroui/accordion"



export const AccordianComponent = ({
    data=[]
}) => {
  return (
      <Accordion className="w-full">
          {data.map((item, index) => (
              <AccordionItem key={item.key} title={item.title}>
                  {item.content}
              </AccordionItem>
          ))}
      </Accordion>
  )
}

