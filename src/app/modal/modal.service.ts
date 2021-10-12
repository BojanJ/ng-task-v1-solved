import { ModalFailureComponent } from './../modal-types/modal-failure/modal-failure.component';
import { DOCUMENT } from '@angular/common';
import { ComponentFactoryResolver, Inject, Injectable, Injector, TemplateRef, Type, ViewContainerRef } from '@angular/core';

import { ModalComponent } from './modal.component';

export type Content<T> = string | TemplateRef<T> | Type<T>;

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  /*
  The modal service should make it possible to show some pre-defined modals very easily from any component.

  Only setup required should be to import the modal service in your component ts and run whatever you wish.
  */

  private containerRef: any;

  constructor(private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) { }

  setContainerRef(viewContainerRef: ViewContainerRef) {
    this.containerRef = viewContainerRef;
  }

  open<T>(content: Content<T>, title: string, body: string, type: string, isContent: boolean) {
    const factory = this.resolver.resolveComponentFactory(ModalComponent);
    const ngContent = this.resolveNgContent(content, title, body);
    const componentRef = factory.create(this.injector, ngContent);

    componentRef.instance.title = title;
    componentRef.instance.body = body;
    componentRef.instance.type = type;
    componentRef.instance.isContent = isContent;

    componentRef.instance.show();
    componentRef.hostView.detectChanges();

    this.containerRef.insert(componentRef.hostView);
  }

  resolveNgContent<Any>(content: Content<any>, title:string, body: string) {
    if (typeof content === 'string') {
      const element = this.document.createTextNode(content);
      return [[element]];
    }

    if (content instanceof TemplateRef) {
      const viewRef = content.createEmbeddedView(null as any);
      return [viewRef.rootNodes];
    }

    const factory = this.resolver.resolveComponentFactory(content);
    const componentRef = factory.create(this.injector);
    componentRef.instance.title = title;
    componentRef.instance.body = body;
    componentRef.hostView.detectChanges();
    return [[componentRef.location.nativeElement]];
  }

  // Open a success modal
  success(title: string, body: string): ModalComponent | null {
    // Final implementation should always return !null
    this.open('', title, body, 'success', false);
    return null;
  }

  // Open a failure modal
  failure(title: string, body: string): ModalComponent | null {
    // Final implementation should always return !null
    this.open(ModalFailureComponent, title, body, 'failure', true);
    return null;
  }
}
