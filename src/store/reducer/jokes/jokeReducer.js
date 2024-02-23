import jokeActions from './actions';
export default (jokes, action) => {
  switch (action.type) {
    case jokeActions.ADD_JOKE:
      return [
        ...jokes,
        { ...action.payload, id: self.crypto.randomUUID(), like: 0 },
      ];
    case jokeActions.LD_JOKE:
      return [
        ...jokes.reduce(
          (acc, curr) => [
            ...acc,
            {
              ...curr,
              like:
                action.payload.id === curr.id
                  ? '-' === action.payload.op
                    ? curr.like - 1
                    : curr.like + 1
                  : curr.like,
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
