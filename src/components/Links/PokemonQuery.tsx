import { Query } from 'react-apollo';

interface IData {
  allPeople: {
    people: Array<{ name: string }>;
  };
};

interface IVariables {
  first: number;
};

class AllPeopleQuery extends Query<IData, IVariables> {

}

export default AllPeopleQuery;