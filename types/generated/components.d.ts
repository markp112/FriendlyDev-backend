import type { Schema, Struct } from '@strapi/strapi';

export interface GrammarPronounRow extends Struct.ComponentSchema {
  collectionName: 'components_grammar_pronoun_rows';
  info: {
    displayName: 'pronoun-row';
    icon: 'plus';
  };
  attributes: {
    category: Schema.Attribute.String & Schema.Attribute.Required;
    cod: Schema.Attribute.Blocks;
    coi: Schema.Attribute.Blocks;
    reflexive: Schema.Attribute.Blocks;
    stressed: Schema.Attribute.Blocks;
    subject: Schema.Attribute.Blocks;
    translation: Schema.Attribute.String;
  };
}

export interface GrammarPronounTable extends Struct.ComponentSchema {
  collectionName: 'components_grammar_pronoun_tables';
  info: {
    displayName: 'pronoun-table';
    icon: 'apps';
  };
  attributes: {
    rows: Schema.Attribute.Component<'grammar.pronoun-row', true>;
    title: Schema.Attribute.String;
  };
}

export interface PageElementsHero extends Struct.ComponentSchema {
  collectionName: 'components_page_elements_heroes';
  info: {
    displayName: 'Hero';
    icon: 'book';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageElementsImageWithCaption extends Struct.ComponentSchema {
  collectionName: 'components_page_elements_image_with_captions';
  info: {
    displayName: 'imageWithCaption';
    icon: 'landscape';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PageElementsListElement extends Struct.ComponentSchema {
  collectionName: 'components_page_elements_list_elements';
  info: {
    displayName: 'listElement';
    icon: 'bulletList';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

export interface PageElementsPageContentListElement
  extends Struct.ComponentSchema {
  collectionName: 'components_page_elements_page_content_list_elements';
  info: {
    displayName: 'pageContentListElement';
    icon: 'bulletList';
  };
  attributes: {
    item: Schema.Attribute.Component<'page-elements.list-element', false>;
  };
}

export interface PageElementsPageTitleWithImage extends Struct.ComponentSchema {
  collectionName: 'components_page_elements_page_title_with_images';
  info: {
    displayName: 'pageTitleWithImage';
    icon: 'envelop';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    introduction: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PageElementsParagraphWithList extends Struct.ComponentSchema {
  collectionName: 'components_page_elements_paragraph_with_lists';
  info: {
    displayName: 'paragraphWithList';
    icon: 'calendar';
  };
  attributes: {
    listItems: Schema.Attribute.Component<'page-elements.list-element', true>;
    title: Schema.Attribute.String;
  };
}

export interface PageElementsParagraphWithTitle extends Struct.ComponentSchema {
  collectionName: 'components_page_elements_paragraph_with_titles';
  info: {
    displayName: 'paragraphWithTitle';
    icon: 'briefcase';
  };
  attributes: {
    content: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PageElementsRichText extends Struct.ComponentSchema {
  collectionName: 'components_page_elements_rich_texts';
  info: {
    displayName: 'richText';
    icon: 'brush';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'grammar.pronoun-row': GrammarPronounRow;
      'grammar.pronoun-table': GrammarPronounTable;
      'page-elements.hero': PageElementsHero;
      'page-elements.image-with-caption': PageElementsImageWithCaption;
      'page-elements.list-element': PageElementsListElement;
      'page-elements.page-content-list-element': PageElementsPageContentListElement;
      'page-elements.page-title-with-image': PageElementsPageTitleWithImage;
      'page-elements.paragraph-with-list': PageElementsParagraphWithList;
      'page-elements.paragraph-with-title': PageElementsParagraphWithTitle;
      'page-elements.rich-text': PageElementsRichText;
    }
  }
}
