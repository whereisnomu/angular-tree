import { Component, Input } from '@angular/core';
import { TreeNode } from '../tree-node/tree-node.component';
import { CommonModule } from '@angular/common';
import { TreeNodeComponent } from '../tree-node/tree-node.component';
@Component({
  selector: 'app-tree-view',
  imports: [CommonModule, TreeNodeComponent],
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.scss',
})
export class TreeViewComponent {
  @Input() nodes: TreeNode[] = [];
}
