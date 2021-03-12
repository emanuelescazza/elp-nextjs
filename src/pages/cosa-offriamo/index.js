import Content from '../../components/content';

export default function CosaOffriamo() {
  const title = {
    up: 'Come, quando, perchè',
    down: 'Cosa Offriamo'
  };
  const body = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error a rem, quo expedita eveniet tempora harum
  quas ab eum repudiandae alias est corporis praesentium eaque ipsam. Eos qui unde aspernatur blanditiis
  neque doloremque nam quidem culpa vero reiciendis, earum eum voluptas corporis repellendus dicta quos,
  repellat architecto in odio. Pariatur eaque, nesciunt illum totam similique laborum ratione saepe nihil
  odio eveniet necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error a rem, quo expedita eveniet tempora harum
  quas ab eum repudiandae alias est corporis praesentium eaque ipsam. Eos qui unde aspernatur blanditiis
  neque doloremque nam quidem culpa vero reiciendis, earum eum voluptas corporis repellendus dicta quos,
  repellat architecto in odio. Pariatur eaque, nesciunt illum totam similique laborum ratione saepe nihil
  odio eveniet necessitatibus!`;
  return (
    <div>
      <Content title={title} body={body} />
      <Content title={title} body={body} />
    </div>
  )
}