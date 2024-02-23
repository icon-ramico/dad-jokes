import jokeActions from './actions';
export default (jokes, action) => {
  switch (action.type) {
    case jokeActions.ADD_JOKE:
      return [
        ...jokes,
        { ...action.payload, id: self.crypto.randomUUID(), like: 0 },
      ];
    case jokeActions.LIKE_JOKE:
      return [
        ...jokes.reduce(
          (acc, curr) => [
            ...acc,
            {
              ...curr,
              like: action.payload.id === curr.id ? curr.like + 1 : curr.like,
            },
          ],
          [],
        ),
      ];
    case jokeActions.DISLIKE_JOKE:
      return [
        ...jokes.reduce(
          (acc, curr) => [
            ...acc,
            {
              ...curr,
              like: action.payload.id === curr.id ? curr.like - 1 : curr.like,
            },
          ],
          [],
        ),
      ];
    case jokeActions.DELETE_JOKE:
      return jokes.filter(s => s.id !== action.payload.id);
    case jokeActions.SORT_JOKES:
      return [...jokes].sort((a, b) => b.like - a.like);
  }
};
