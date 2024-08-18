import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    // Rendre le composant Home
    render(<Home />);

    // Vérification que la div contenant les événements est présente
    const eventsContainer = await screen.getByTestId('events-list');
    expect(eventsContainer).toBeInTheDocument();

    // Vérification qu'il y a au moins un élément enfant (événement) dans la div
    const eventItems = await screen.findAllByRole('listitem');
    expect(eventItems.length).toBeGreaterThan(0);
  });
  it("a list a people is displayed", () => {

    const { container } = render(<Home />);
     // Utilisez querySelector pour cibler le conteneur par sa classe
    const listPeopleCard = container.querySelector('.ListContainer');
    // Vérifiez que le conteneur est présent
    expect(listPeopleCard).toBeInTheDocument();
    // le nombre de personnes affichées
    // Vérifier la présence de chaque carte en utilisant le nom des personnes
    expect(screen.getByText('Samira')).toBeInTheDocument();
    expect(screen.getByText('Jean-baptiste')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Luís')).toBeInTheDocument();
    expect(screen.getByText('Christine')).toBeInTheDocument();
    expect(screen.getByText('Isabelle')).toBeInTheDocument();
  })
  it("a footer is displayed", () => {
    const { container } = render(<Home />);
    // Utiliser querySelector pour cibler le footer par balise ou classe CSS
    // Sélectionner par balise <footer>
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  })
  it("an event card, with the last event, is displayed", () => {
    const { container } = render(<Home />);
  
  // Utilisez querySelector pour trouver l'élément avec la classe 'col presta'
  const prestaContainer = container.querySelector('.col.presta');
  
  // Vérifiez que le conteneur est bien présent dans le DOM
  expect(prestaContainer).toBeInTheDocument();
  })
});
