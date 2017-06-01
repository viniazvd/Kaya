export class PessoasInMemoryDS {
  createDb() {
    let pessoass = [
      {
        id: 1,
        name: 'Usuario1',
        email: 'user1@email.com'
      },
      {
        id: 2,
        name: 'Usuario2',
        email: 'user2@email.com'
      },
      {
        id: 3,
        name: 'Usuario3',
        email: 'user3@email.com'
      }
    ];
    return { pessoass };
  }
}