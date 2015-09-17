<?php
	class Madcomputing_Quoteviewer_QuoteviewerController extends Mage_Adminhtml_Controller_Action
	{
		protected function _initAction(){
			// load layout, set active menu and breadcrumbs
	        $this->loadLayout()
	            ->_setActiveMenu('quoteviewer/index')
	            ->_addBreadcrumb(
	                  Mage::helper('quoteviewer')->__('Quote Viewer'),
	                  Mage::helper('quoteviewer')->__('Quote Viewer')
	              )
	        ;

	        /* $this->loadLayout()
	            ->_setActiveMenu('quoteviewer/index');
	        ;*/
	        return $this;
		}

		public function indexAction()
	    {
	        $this->_title($this->__('Quoteviewer'))
	             ->_title($this->__('Manage Quotes'));

	        $this->_initAction();
	        $this->renderLayout();
	    }

		public function gridAction(){
			$this->loadLayout();
			$this->renderLayout();
		}

		protected function _isAllowed(){
			return Mage::getSingleton('Admin/session')->isAllowed('/quoteviewer/index');
		}
	}
?>