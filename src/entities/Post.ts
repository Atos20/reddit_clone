import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Post {
//this properties corresopond to the columns 
  @PrimaryKey()
  id!: number;

  @Property({ type: 'date' })
  createdAt = new Date();//this are good to have when they are created

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ type: 'text' })//this is just a ttitle 
  title!: string;

  // @ManyToOne() // when you provide correct type hint, ORM will read it for you
  // author!: Author;

  // @ManyToOne(() => Publisher) // or you can specify the entity as class reference or string name
  // publisher?: Publisher;

  // @ManyToMany() // owning side can be simple as this!
  // tags = new Collection<BookTag>(this);

  // constructor(title: string, author: Author) {
  //   this.title = title;
  //   this.author = author;
  // }

}