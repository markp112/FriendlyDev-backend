import type { Schema, Struct } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page-elements.hero': PageElementsHero;
      'page-elements.list-element': PageElementsListElement;
      'page-elements.page-content-list-element': PageElementsPageContentListElement;
      'page-elements.page-title-with-image': PageElementsPageTitleWithImage;
      'page-elements.paragraph-with-list': PageElementsParagraphWithList;
      'page-elements.paragraph-with-title': PageElementsParagraphWithTitle;
    }
  }
}
