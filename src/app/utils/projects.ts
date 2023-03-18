export class ProjectsData {
  public getProjects() {
    return [
      {
        id: 1,
        title: 'TODO List',
        description: 'Resultado de una serie de cursos de React.js',
        repo_link: 'https://github.com/Garcia96/todolist',
        skills: ['Javascript', 'React.js'],
        img: '../../assets/img/todolist.png',
        demo_link: 'https://garcia96.github.io/todolist/',
      },
      {
        id: 2,
        title: 'Garcia96 Page',
        description:
          'El proyecto de esta página, la idea es practicar Angular construyendo una aplicación que sirve con CV/Portafolio',
        repo_link: 'https://github.com/Garcia96/Garcia96.github.io',
        skills: ['Angular', 'Typescript', 'Bootstrap'],
        img: '../../assets/img/Garcia96.png',
        demo_link: 'https://garcia96.github.io/',
      },
    ];
  }
}
