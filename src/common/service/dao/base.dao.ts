export default interface BaseDAO<T> {
  getBodyJson: () => T;
}
