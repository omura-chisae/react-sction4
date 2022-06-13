import classses from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classses.container}>
      <p className={classses.title}>- css Modules -</p>
      <button className={classses.button}>FIGHT</button>
    </div>
  );
};
