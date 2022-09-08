import React from 'react';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

export default function About() {

  return (
    <MDBAccordion initialActive={1}>
      <MDBAccordionItem collapseId={1} headerTitle='vision Item #1'>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
        plugin adds the appropriate classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
        within the <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle='mission Item #2'>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
        plugin adds the appropriate classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
        within the <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3} headerTitle='targets #3'>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapsebr<br></br>
        plugin adds the appropriate classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
        within the <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>
    </MDBAccordion>
  );
}