import Content from '../../components/content';

export default function Bio() {
  const body = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error a rem, quo expedita eveniet tempora harum
  quas ab eum repudiandae alias est corporis praesentium eaque ipsam. Eos qui unde aspernatur blanditiis
  neque doloremque nam quidem culpa vero reiciendis, earum eum voluptas corporis repellendus dicta quos,
  repellat architecto in odio. Pariatur eaque, nesciunt illum totam similique laborum ratione saepe nihil
  odio eveniet necessitatibus! Id totam libero fugit ipsa nemo dolor sapiente distinctio iste beatae?`;
  return (
    <div>
      <Content title={{ up: 'Alessia Pompamea', down: 'Psicologa, Psicoterapeuta in formazione' }}
        body={body}
        img={{ path: 'bananas.jpg', isCircle: true }}
        isSplitted
      />
      <Content title={{ up: 'Filomena Guarino', down: 'Specializzata in disturbi dell\'alimentazione' }}
        body={body}
        img={{ path: 'kiwi.jpg', isCircle: true }}
        isSplitted
      />
    </div>
  )
}