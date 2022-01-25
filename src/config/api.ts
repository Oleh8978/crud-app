interface IHostEnv {
    MAIN_HOST_URI: string;
    MAIN_API_PATH: string;
  }
  
  export class Config {
    public static init(env: IHostEnv) {
      this.MAIN_HOST_URI = env.MAIN_HOST_URI;
      this.MAIN_API_PATH = env.MAIN_API_PATH;
    }
  
    public static MAIN_HOST_URI: string;
    public static MAIN_API_PATH: string;
    
    public static get MAIN_URI() {
      return this.MAIN_HOST_URI;
    }

    public static get MAIN_PATH() {
      return this.MAIN_API_PATH
    }
  
    public static get COMBINED_MAIN_ENDPOINT() {
      return `${this.MAIN_HOST_URI}${this.MAIN_API_PATH}`;
    };

  }
  