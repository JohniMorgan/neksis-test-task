export class CardItem {
  id: number;
  title: string;
  description: string;
  published: boolean;
  published_from: Date | null;

  constructor(seed: number) {
    this.id = seed + 1;
    this.title = "";
    this.description = "";
    this.published = false;
    this.published_from = null;
  }
  initFromData(data: CardData) : CardItem {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.published = data.published;
    this.published_from = data.published_from ? new Date(data.published_from) : null;
    return this;
  }
  initNew(seed: number) : CardItem {
    this.id = seed + 1;
    return this;
  }

  validate(): ValidationReport {
    let errors = [];
    let isValid = true;
    if (this.title.length >= 50) {
      errors.push({
        key: "title",
        msg: "Заголовок должен быть не более 50 символов",
      });
      isValid = false;
    }
    if (this.published === null) {
        errors.push({
            key: "published",
            msg: "Данное поле обязательно к заполнению"
        })
        isValid = false
    }
    
    return {
      isValid,
      errors,
    };
  }
}

type ValidationReport = {
  isValid: boolean;
  errors: Array<{
    key: string;
    msg: string;
  }>;
};

export interface CardData {
  id: number;
  title: string;
  description: string;
  published: boolean;
  published_from: string | null;
}

export class Model {
    data: Array<CardItem>;

    constructor(json: string) {
        const objectData = JSON.parse(json);
        this.data = objectData
    }

    get seed() {
        return this.data.reduce((maxed, current) => Math.max(maxed, current.id), -Infinity)
    }
}
