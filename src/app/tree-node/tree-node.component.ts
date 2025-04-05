import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
export interface TreeNode {
  id: number;
  title: string;
  is_deleted: boolean;
  children: TreeNode[];
  deleted_at?: Date | null;
}

@Component({
  selector: 'app-tree-node',
  imports: [CommonModule],
  templateUrl: './tree-node.component.html',
  styleUrl: './tree-node.component.scss',
})
export class TreeNodeComponent {
  @Input() node!: TreeNode;
  isExpanded = false;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
