```jsx
<Dialog open={open} onClose={close}
  title="Refuser cette demande ?"
  description="Le demandeur sera informé. Vous pourrez toujours proposer votre aide sur une autre demande."
  actions={<><Button variant="quiet" onClick={close}>Annuler</Button><Button onClick={refuse}>Refuser</Button></>} />
```

Le voile est vert translucide, jamais noir. Une seule modale à la fois, jamais pour de l'information simple — utilisez `Alert`.
