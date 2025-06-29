import { forwardRef, createContext, useContext } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils'

const AccordionContext = createContext({})

const useAccordion = () => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('useAccordion must be used within an Accordion provider')
  }
  return context
}

const Accordion = forwardRef(({ className, type = "single", value, onValueChange, children, ...props }, ref) => {
  return (
    <AccordionContext.Provider value={{ type, value, onValueChange }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
})
Accordion.displayName = "Accordion"

const AccordionItem = forwardRef(({ className, value, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("border-b", className)} {...props} data-value={value}>
      {children}
    </div>
  )
})
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = forwardRef(({ className, children, onClick, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </button>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  )
})
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } 